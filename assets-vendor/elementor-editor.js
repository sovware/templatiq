;
(function ($, elementor, tm) {

	var Library = {
		Behaviors: {},
		Layout: null,
		Manager: null,
	};

	// Perfect
	Library.Behaviors.InsertTemplate = Marionette.Behavior.extend({
		ui: {
			insertButton: '.tmTemplateLibrary__insert-button',
		},

		events: {
			'click @ui.insertButton': 'onInsertButtonClick',
		},

		onInsertButtonClick: function () {
			// window.tm.view = this.view.model;

			tm.library.insertTemplate({
				model: this.view.model,
			});
		},
	});
	
	// Perfect
	Library.Modal = elementorModules.common.views.modal.Layout.extend({
		getModalOptions: function () {
			return {
				id: 'tmTemplateLibrary__modal',
				hide: {
					onOutsideClick: false,
					onEscKeyPress: true,
					onBackgroundClick: true,
				}
			};
		},
	});

	// Perfect
	Library.Manager = function () {
		var modal,
			self = this,
			templatesCollection,
			FIND_SELECTOR = '.elementor-add-new-section .elementor-add-section-drag-title',
			$openLibraryButton = '<div class="elementor-add-section-area-button elementor-add-tm-button"> <i class="fa fa-download"></i> </div>';

		this.atIndex = -1;

		this.channels = {
			tabs: Backbone.Radio.channel('tabs'),
			templates: Backbone.Radio.channel('templates'),
		};

		function onAddElementButtonClick() {
			var $topSection = $(this).closest('.elementor-top-section'),
				sectionId = $topSection.data('id'),
				documentSections = elementor.documents.getCurrent().container.children,
				$addSection = $topSection.prev('.elementor-add-section');

			if (documentSections) {
				_.each(documentSections, function (sectionContainer, index) {
					if (sectionId === sectionContainer.id) {
						self.atIndex = index
					}
				});
			}

			if (!$addSection.find('.elementor-add-tm-button').length) {
				$addSection
					.find(FIND_SELECTOR)
					.before($openLibraryButton);
			}
		}

		function addLibraryModalOpenButton($previewContents) {
			var $addNewSection = $previewContents.find(FIND_SELECTOR);

			if ($addNewSection.length && ! $previewContents.find('.elementor-add-tm-button').length) {
				$addNewSection.before($openLibraryButton);
			}

			$previewContents.on(
				'click.onAddElement',
				'.elementor-editor-section-settings .elementor-editor-element-add',
				onAddElementButtonClick
			);
		}

		function onPreviewLoaded() {
			var $previewContents = window.elementor.$previewContents,
				time = setInterval(function () {
					addLibraryModalOpenButton($previewContents);
					$previewContents.find('.elementor-add-new-section').length > 0 && clearInterval(time);
				}, 100);

			$previewContents.on(
				'click.onAddTemplateButton',
				'.elementor-add-tm-button',
				self.showModal.bind(self)
			);
		}
	
		this.showModal = function () {
			self.getModal().showModal();
			self.showTemplatesView();
		};

		this.closeModal = function () {
			this.getModal().hideModal();
		};

		this.getModal = function () {
			if (!modal) {
				modal = new Library.Modal();
			}

			return modal;
		};

		this.init = function () {
			elementor.on('preview:loaded', onPreviewLoaded.bind(this));
		}

		this.showTemplatesView = function () {
			if (!templatesCollection) {
				self.loadTemplates(function () {
					self.getModal().showTemplatesView(templatesCollection);
				});
			} else {
				self.getModal().showTemplatesView(templatesCollection);
			}
		};
		
		this.loadTemplates = function (onUpdate) {
			const containerDiv = document.querySelector('.elementor-templates-modal .dialog-message');
			const loadingDiv = document.querySelector('.elementor-templates-modal .dialog-message .dialog-content');
			const rootDiv      = document.createElement('div');

			rootDiv.className = 'templatiq-root';
			rootDiv.id = 'templatiq-root';

			containerDiv.appendChild(rootDiv);
			containerDiv.removeChild(loadingDiv);

			wp.hooks.doAction('templatiq_load_admin_app', rootDiv)
		};

		this.requestTemplateData = function (template_id, ajaxOptions) {
			var options = {
				unique_id: template_id, 
				data: {
					edit_mode: true,
					display: true,
					template_id: template_id,
				},
			};

			if (ajaxOptions) {
				jQuery.extend(true, options, ajaxOptions);
			}

			elementorCommon.ajax.addRequest('get_tm_template_data', options);
		};

		this.insertTemplate = function (args, template_id) {
			var model = args.model,
				self = this;

			self.getModal().showLoadingView();

			self.requestTemplateData(template_id, {
				success: function (data) {
					self.getModal().hideLoadingView();
					self.getModal().hideModal();

					var options = {}

					if (self.atIndex !== -1) {
						options.at = self.atIndex;
					}

					$e.run('document/elements/import', {
						model: model,
						data: data,
						options: options
					});

					self.atIndex = -1;
				},
				error: function (data) {
					self.showErrorDialog(data);
				},
				complete: function (data) {
					self.getModal().hideLoadingView();
					window.elementor.$previewContents.find('.elementor-add-section .elementor-add-section-close').click();
				},
			});
		};
	};

	tm.library = new Library.Manager();
	tm.library.init();

	window.tm = tm;
}(jQuery, window.elementor, window.tm || {}));
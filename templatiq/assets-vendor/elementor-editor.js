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
			$openLibraryButton = `<div class="elementor-add-section-area-button elementor-add-tm-button"> 
			<svg id="download" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
			<path id="Path_1556" data-name="Path 1556" d="M113.134,8.84a2.255,2.255,0,0,0,3.185,0h0l1.607-1.6a.75.75,0,1,0-1.043-1.078l-.018.018-1.393,1.389L115.461.749A.75.75,0,0,0,114.71,0h0a.75.75,0,0,0-.751.749l.01,6.806-1.382-1.379a.75.75,0,0,0-1.061,1.059Z" transform="translate(-108.71)" fill="#6e6e6e"/>
			<path id="Path_1557" data-name="Path 1557" d="M11.25,309.333a.75.75,0,0,0-.75.749v2.293a.2.2,0,0,1-.2.2H1.7a.2.2,0,0,1-.2-.2v-2.293a.75.75,0,0,0-1.5,0v2.293a1.706,1.706,0,0,0,1.7,1.7H10.3a1.705,1.705,0,0,0,1.7-1.7v-2.293A.75.75,0,0,0,11.25,309.333Z" transform="translate(0 -302.078)" fill="#6e6e6e"/>
			</svg> </div>`;

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
			const containerDiv = document.querySelector('.elementor-templates-modal .dialog-content');
			const templatiqRoot = document.querySelector('.templatiq-root');
			
			if (!templatiqRoot) {
				const rootDiv = document.createElement('div');
				rootDiv.className = 'templatiq-root';
				rootDiv.id = 'templatiq-root';

				containerDiv.appendChild(rootDiv);
				wp.hooks.doAction('templatiq_load_admin_app', rootDiv);
			}
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

			elementorCommon.ajax.addRequest('get_templatiq_template_data', options);
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
;
(function ($, elementor, tm) {
	var Library = {
		Views: {},
		Models: {},
		Collections: {},
		Behaviors: {},
		Layout: null,
		Manager: null,
	};

	Library.Modal = elementorModules.common.views.modal.Layout.extend({
		getModalOptions: function () {
			return {
				id: 'tmTemplateLibrary__modal',
				hide: {
					onOutsideClick: false,
					onEscKeyPress: true,
					onBackgroundClick: false,
				}
			};
		},

		showLogo: function (args) {
			this.getHeaderView().logoArea.show(new Library.Views.Logo(args));
		},

		showDefaultHeader: function () {
			this.showLogo({
				title: 'Template Market'
			});

			var headerView = this.getHeaderView();
			headerView.tools.show(new Library.Views.Actions());
			headerView.menuArea.show( new Library.Views.Menu() );
			// headerView.menuArea.reset();
		},

		showPreviewView: function (templateModel) {
			var headerView = this.getHeaderView();

			headerView.menuArea.show(new Library.Views.ResponsiveMenu());
			headerView.logoArea.show(new Library.Views.BackButton());
			headerView.tools.show(new Library.Views.InsertWrapper({
				model: templateModel
			}));

			this.modalContent.show(new Library.Views.Preview({
				url: templateModel.get('url')
			}));
		},

		showTemplatesView: function () {
			this.showDefaultHeader();
		}
	});

	Library.Manager = function () {
		var modal,
			self = this,
			FIND_SELECTOR = '.elementor-add-new-section .elementor-add-section-drag-title',
			$openLibraryButton = '<div class="elementor-add-section-area-button elementor-add-tm-button"> <i class="fa fa-download"></i> </div>'

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
			console.log('Preview loaded');
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
			self.getModal().showLoadingView.bind(self.getModal())
			var containerDiv = document.querySelector('.dialog-message');
			var rootDiv = document.createElement('div');
			const script = document.createElement('script');
			const loadingDiv = document.querySelector('.dialog-loading');
			const blankDiv = document.querySelector('.dialog-content ');

			// Append the new element to the containerDiv
			rootDiv.className = 'templatiq-root';
			rootDiv.id = 'templatiq-root'; 

			containerDiv.appendChild(rootDiv);
			
			// Load additional JavaScript (replace 'your-script.js' with the actual script file)
			script.src = '../wp-content/plugins/template-market/assets/js/admin.js';
			document.head.appendChild(script);

			if (loadingDiv) {
				loadingDiv.remove();
			}
			if (blankDiv) {
				blankDiv.remove();
			}

			console.log('Apended: ', rootDiv, script, containerDiv, loadingDiv, blankDiv);
		};

	};

	tm.library = new Library.Manager();
	tm.library.init();

	window.tm = tm;
}(jQuery, window.elementor, window.tm || {}));
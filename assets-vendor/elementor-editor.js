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

	Library.Models.Template = Backbone.Model.extend({
		defaults: {
			template_id: 0,
			title: '',
			type: '',
			thumbnail: '',
			url: '',
			tags: [],
			isPro: false
		},
	});

	Library.Collections.Template = Backbone.Collection.extend({
		model: Library.Models.Template
	});

	Library.Behaviors.InsertTemplate = Marionette.Behavior.extend({
		ui: {
			insertButton: '.tmTemplateLibrary__insert-button',
		},

		events: {
			'click @ui.insertButton': 'onInsertButtonClick',
		},

		onInsertButtonClick: function () {
			tm.library.insertTemplate({
				model: this.view.model,
			});
		},
	});

	Library.Views.EmptyTemplateCollection = Marionette.ItemView.extend({
		id: 'elementor-template-library-templates-empty',
		template: '#tmpl-tmTemplateLibrary__empty',

		ui: {
			title: '.elementor-template-library-blank-title',
			message: '.elementor-template-library-blank-message',
		},

		modesStrings: {
			empty: {
				title: 'Empty',
				message: 'It looks like not found',
			},
			noResults: {
				title: 'No result found',
				message: 'No result found',
			},
		},

		getCurrentMode: function () {
			if (tm.library.getFilter('text')) {
				return 'noResults';
			}

			return 'empty';
		},

		onRender: function () {
			var modeStrings = this.modesStrings[this.getCurrentMode()];

			this.ui.title.html(modeStrings.title);
			this.ui.message.html(modeStrings.message);
		},
	});

	Library.Views.Loading = Marionette.ItemView.extend({
		template: '#tmpl-tmTemplateLibrary__loading',
		id: 'tmTemplateLibrary__loading',
	});

	Library.Views.Logo = Marionette.ItemView.extend({
		template: '#tmpl-tmTemplateLibrary__header-logo',
		className: 'tmTemplateLibrary__header-logo',

		templateHelpers: function () {
			return {
				title: this.getOption('title'),
			};
		},
	});

	Library.Views.BackButton = Marionette.ItemView.extend({
		template: '#tmpl-tmTemplateLibrary__header-back',
		id: 'elementor-template-library-header-preview-back',
		className: 'tmTemplateLibrary__header-back',

		events: function () {
			return {
				click: 'onClick',
			};
		},

		onClick: function () {
			tm.library.showTemplatesView();
		},
	});

	Library.Views.Menu = Marionette.ItemView.extend({
		template: '#tmpl-tmTemplateLibrary__header-menu',
		id: 'elementor-template-library-header-menu',
		className: 'tmTemplateLibrary__header-menu',

		templateHelpers: function () {
			return tm.library.getTabs();
		},

		ui: {
			menuItem: '.elementor-template-library-menu-item'
		},

		events: {
			'click @ui.menuItem': 'onMenuItemClick'
		},

		onMenuItemClick: function(event) {
			tm.library.setFilter('tags', '');
			tm.library.setFilter('text', '');
			tm.library.setFilter('type', event.currentTarget.dataset.tab, true);

			tm.library.showTemplatesView();
		}
	});

	Library.Views.ResponsiveMenu = Marionette.ItemView.extend({
		template: '#tmpl-tmTemplateLibrary__header-menu-responsive',
		id: 'elementor-template-library-header-menu-responsive',
		className: 'tmTemplateLibrary__header-menu-responsive',

		ui: {
			items: '> .elementor-component-tab'
		},

		events: {
			'click @ui.items': 'onTabItemClick'
		},

		onTabItemClick: function (event) {
			var $target = $(event.currentTarget),
				device = $target.data('tab');

			tm.library.channels.tabs.trigger('change:device', device, $target);
		}
	});

	Library.Views.Actions = Marionette.ItemView.extend({
		template: '#tmpl-tmTemplateLibrary__header-actions',
		id: 'elementor-template-library-header-actions',

		ui: {
			sync: '#tmTemplateLibrary__header-sync i',
		},

		events: {
			'click @ui.sync': 'onSyncClick',
		},

		onSyncClick: function () {
			var self = this;

			self.ui.sync.addClass('eicon-animation-spin');

			tm.library.requestLibraryData({
				onUpdate: function () {
					self.ui.sync.removeClass('eicon-animation-spin');
					tm.library.updateBlocksView();
				},
				forceUpdate: true,
				forceSync: true,
			});
		},
	});

	Library.Views.InsertWrapper = Marionette.ItemView.extend({
		template: '#tmpl-tmTemplateLibrary__header-insert',

		id: 'elementor-template-library-header-preview',

		behaviors: {
			insertTemplate: {
				behaviorClass: Library.Behaviors.InsertTemplate,
			},
		},
	});

	Library.Views.Preview = Marionette.ItemView.extend({
		template: '#tmpl-tmTemplateLibrary__preview',
		className: 'tmTemplateLibrary__preview',

		ui: function () {
			return {
				iframe: '> iframe'
			}
		},

		onRender: function () {
			this.ui.iframe.attr('src', this.getOption('url')).hide();
			var self = this,
				loadingScreen = (new Library.Views.Loading()).render();

			this.$el.append(loadingScreen.el);

			this.ui.iframe.on('load', function () {
				self.$el.find('#tmTemplateLibrary__loading').remove();
				self.ui.iframe.show();
			});
		}
	});

	Library.Views.TemplateCollection = Marionette.CompositeView.extend(
		console.log('Library Template Collection: ', ), {
		template: '#tmpl-tmTemplateLibrary__templates',

		id: 'tmTemplateLibrary__templates',

		className: function() {
			return 'tmTemplateLibrary__templates tmTemplateLibrary__templates--' + tm.library.getFilter('type');
		},

		childViewContainer: '#tmTemplateLibrary__templates-list',

		emptyView: function () {
			return new Library.Views.EmptyTemplateCollection();
		},

		ui: {
			templatesWindow: '.tmTemplateLibrary__templates-window',
			textFilter: '#tmTemplateLibrary__search',
			tagsFilter: '#tmTemplateLibrary__filter-tags',
			filterBar: '#tmTemplateLibrary__toolbar-filter',
			counter: '#tmTemplateLibrary__toolbar-counter'
		},

		events: {
			'input @ui.textFilter': 'onTextFilterInput',
			'click @ui.tagsFilter li': 'onTagsFilterClick',
		},

		getChildView: function (childModel) {
			return Library.Views.Template;
		},

		initialize: function () {
			this.listenTo(tm.library.channels.templates, 'filter:change', this._renderChildren);
		},

		filter: function filter(childModel) {
			var filterTerms = tm.library.getFilterTerms(),
				passingFilter = true;

			_.each(filterTerms, function (filterTerm, filterTermName) {
				var filterValue = tm.library.getFilter(filterTermName);

				if (!filterValue) {
					return;
				}

				if (filterTerm.callback) {
					var callbackResult = filterTerm.callback.call(childModel, filterValue);

					if (!callbackResult) {
						passingFilter = false;
					}

					return callbackResult;
				}
			});

			return passingFilter;
		},

		setMasonrySkin: function () {
			if (tm.library.getFilter('type') === 'section') {
				var masonry = new elementorModules.utils.Masonry({
					container: this.$childViewContainer,
					items: this.$childViewContainer.children(),
				});

				this.$childViewContainer.imagesLoaded(masonry.run.bind(masonry));
			}
		},

		onRenderCollection: function () {
			this.setMasonrySkin();
			this.updatePerfectScrollbar();
			this.setTemplatesFoundText();
		},

		setTemplatesFoundText: function() {
			var type = tm.library.getFilter('type'),
				len = this.children.length,
				text = '<b>' + len + '</b>';

			text += ( type === 'section' ? ' block' : ' ' + type );

			if (len > 1) {
				text += 's';
			}

			text += ' found';

			this.ui.counter.html(text);
		},

		onTextFilterInput: function () {
			var self = this;
			_.defer(function() {
				tm.library.setFilter('text', self.ui.textFilter.val());
			});
		},

		onTagsFilterClick: function (event) {
			var $select = $(event.currentTarget),
				tag = $select.data('tag');
			tm.library.setFilter('tags', tag);

			$select.addClass('active').siblings().removeClass('active');

			if (!tag) {
				tag = 'Filter'
			} else {
				tag = tm.library.getTags()[tag];
			}

			this.ui.filterBar.find('.tmTemplateLibrary__filter-btn').html(tag + ' <i class="eicon-caret-down"></i>');
		},

		updatePerfectScrollbar: function () {
			if (!this.perfectScrollbar) {
				this.perfectScrollbar = new PerfectScrollbar(this.ui.templatesWindow[0], {
					suppressScrollX: true
				}); // The RTL is buggy, so always keep it LTR.
			}
			this.perfectScrollbar.isRtl = false;
			this.perfectScrollbar.update();
		},

		setTagsFilterHover: function () {
			var self = this;

			self.ui.filterBar.hoverIntent(
				function () {
					self.ui.tagsFilter.css('display', 'block');
					self.ui.filterBar
						.find('.tmTemplateLibrary__filter-btn i')
						.addClass('eicon-caret-down')
						.removeClass('eicon-caret-right');
				},
				function () {
					self.ui.tagsFilter.css('display', 'none');
					self.ui.filterBar
						.find('.tmTemplateLibrary__filter-btn i')
						.addClass('eicon-caret-right')
						.removeClass('eicon-caret-down');
				}, {
					sensitivity: 50,
					interval: 150,
					timeout: 100,
				}
			);
		},

		onRender: function () {
			this.setTagsFilterHover();
			this.updatePerfectScrollbar();
		},
	});

	Library.Views.Template = Marionette.ItemView.extend({
		template: '#tmpl-tmTemplateLibrary__template',

		className: 'tmTemplateLibrary__template',

		ui: {
			previewButton: '.tmTemplateLibrary__preview-button, .tmTemplateLibrary__template-preview',
		},

		events: {
			'click @ui.previewButton': 'onPreviewButtonClick',
		},

		behaviors: {
			insertTemplate: {
				behaviorClass: Library.Behaviors.InsertTemplate,
			},
		},

		onPreviewButtonClick: function () {
			tm.library.showPreviewView(this.model)
		},
	});

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

		getTemplateActionButton: function getTemplateActionButton(templateData) {
			var templateName = (templateData.isPro && !TemplateMarket.hasPro) ? 'pro-button' : 'insert-button',
			viewId = '#tmpl-tmTemplateLibrary__' + templateName,
				template = Marionette.TemplateCache.get(viewId);

			return Marionette.Renderer.render(template);
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

		showTemplatesView: function (templatesCollection) {
			this.showDefaultHeader();

			this.modalContent.show(new Library.Views.TemplateCollection({
				collection: templatesCollection,
			}));
		}
	});

	Library.Manager = function () {
		var modal,
			tags,
			typeTags,
			self = this,
			templatesCollection,
			errorDialog,
			FIND_SELECTOR = '.elementor-add-new-section .elementor-add-section-drag-title',
			$openLibraryButton = '<div class="elementor-add-section-area-button elementor-add-tm-button"> <i class="fa fa-download"></i> </div>',
			devicesResponsiveMap = {
				desktop: '100%',
				tab: '768px',
				mobile: '360px',
			};

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
			console.log('Add Element Button Clicked')
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

		function onDeviceChange(device, $target) {
			$target
				.addClass('elementor-active')
				.siblings()
				.removeClass('elementor-active');

			var width = devicesResponsiveMap[device] || devicesResponsiveMap['desktop'];
			$('.tmTemplateLibrary__preview').css('width', width);
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

			this.channels.tabs.on('change:device', onDeviceChange);
		}

		this.updateBlocksView = function () {
			self.setFilter('tags', '', true);
			self.setFilter('text', '', true);

			self.getModal().showTemplatesView(templatesCollection);
		}

		this.setFilter = function (name, value, silent) {
			self.channels.templates.reply('filter:' + name, value);

			if (!silent) {
				self.channels.templates.trigger('filter:change');
			}
		}

		this.getFilter = function (name) {
			return self.channels.templates.request('filter:' + name);
		};

		this.getFilterTerms = function () {
			return {
				tags: {
					callback: function(value) {
						return _.any(this.get('tags'), function (tag) {
							return tag.indexOf(value) >= 0;
						});
					}
				},
				text: {
					callback: function(value) {
						value = value.toLowerCase();

						if (this.get('title').toLowerCase().indexOf(value) >= 0) {
							return true;
						}

						return _.any(this.get('tags'), function (tag) {
							return tag.indexOf(value) >= 0;
						});
					}
				},
				type: {
					callback: function(value) {
						return this.get('type') === value;
					}
				}
			};
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
			self.setFilter('type', 'section', true);

			elementor.on('preview:loaded', onPreviewLoaded.bind(this));
		}

		this.getTabs = function () {
			var type = this.getFilter('type'),
				tabs = {
				section: {
					title: 'Blocks',
				},
				page: {
					title: 'Pages'
				}
			};

			_.each(tabs, function(obj, key) {
				if (type === key) {
					tabs[type].active = true;
				}
			})

			return {
				tabs: tabs
			};
		};

		this.getTags = function () {
			return tags;
		}

		this.getTypeTags = function () {
			var type = self.getFilter('type');

			return typeTags[type];
		}

		this.showTemplatesView = function () {
			self.setFilter('tags', '', true);
			self.setFilter('text', '', true);

			if (!templatesCollection) {
				self.loadTemplates(function () {
					self.getModal().showTemplatesView(templatesCollection);
				});
			} else {
				self.getModal().showTemplatesView(templatesCollection);
			}
		};

		this.showPreviewView = function (templateModel) {
			self.getModal().showPreviewView(templateModel);
		};

		this.loadTemplates = function (onUpdate) {
			self.requestLibraryData({
				onBeforeUpdate: self.getModal().showLoadingView.bind(self.getModal()),
				onUpdate: function () {
					self.getModal().hideLoadingView();

					if (onUpdate) {
						onUpdate();
					}
				},
			});
		};

		this.requestLibraryData = function (options) {
			if (templatesCollection && !options.forceUpdate) {

				console.log('templatesCollection', templatesCollection);
				if (options.onUpdate) {
					options.onUpdate();
				}

				return;
			}

			if (options.onBeforeUpdate) {
				options.onBeforeUpdate();
			}

			var ajaxOptions = {
				data: {},
				success: function (data) {
					templatesCollection = new Library.Collections.Template(data.templates);
					const rootDiv = document.querySelector('.templatiq-root');

					console.log('rootDiv Data: ', rootDiv, data, templatesCollection);

					if (data.templates) {
						// const containerDiv = document.querySelector('.elementor-templates-modal .dialog-message');
						// const rootDiv = document.createElement('div');
						// const script = document.createElement('script');
						// const loadingDiv = document.querySelector('.elementor-templates-modal .dialog-loading');
						// const blankDiv = document.querySelector('.elementor-templates-modal .dialog-content ');
					
						// // Append the new element to the containerDiv
						// rootDiv.className = 'templatiq-root';
						// rootDiv.id = 'templatiq-root'; 
					
						// containerDiv.appendChild(rootDiv);
					
						// // Load additional JavaScript (replace 'your-script.js' with the actual script file)
						// script.src = '../wp-content/plugins/template-market/assets/js/admin.js';
						// document.head.appendChild(script);
					
						// if (loadingDiv) {
						// 	loadingDiv.remove();
						// }
						// if (blankDiv) {
						// 	blankDiv.remove();
						// }
					
						// console.log('Appended: ', rootDiv, script, containerDiv, loadingDiv, blankDiv);
					
						// containerDiv.addEventListener('click', function(event) {
						// 	const insertButton = event.target.closest('.tmTemplateLibrary__insert-button');
						// 	if (insertButton) {
						// 		// The button was clicked, handle the event
						// 		console.log('Insert button clicked from dynamic content: ', insertButton.id);
						// 		// Additional logic here
								
						// 	}
						// });
					}

					if (data.categories) {
						tags = data.categories;
					}

					if (data.plugins) {
						typeTags = data.plugins;
					}

					if (options.onUpdate) {
						options.onUpdate();
					}
				},
			};

			if (options.forceSync) {
				ajaxOptions.data.sync = true;
			}

			elementorCommon.ajax.addRequest('get_tm_library_data', ajaxOptions);
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

		this.insertTemplate = function (args) {
			console.log('Insert Template: ', args)
			var model = args.model,
				self = this;

			self.getModal().showLoadingView();

			self.requestTemplateData(model.get('template_id'), {
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

		this.showErrorDialog = function (errorMessage) {
			if ('object' === typeof errorMessage) {
				var message = '';

				_.each(errorMessage, function (error) {
					message += '<div>' + error.message + '.</div>';
				});

				errorMessage = message;
			} else if (errorMessage) {
				errorMessage += '.';
			} else {
				errorMessage = '<i>&#60;The error message is empty&#62;</i>';
			}

			self.getErrorDialog()
				.setMessage('The following error(s) occurred while processing the request:' + '<div id="elementor-template-library-error-info">' + errorMessage + '</div>')
				.show();
		};

		this.getErrorDialog = function () {
			if (!errorDialog) {
				errorDialog = elementorCommon.dialogsManager.createWidget('alert', {
					id: 'elementor-template-library-error-dialog',
					headerMessage: 'An error occurred',
				});
			}

			return errorDialog;
		};
	};

	tm.library = new Library.Manager();
	tm.library.init();

	window.tm = tm;
}(jQuery, window.elementor, window.tm || {}));
frappe.pages['Results Pivot'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Results Pivot Dashboard',
		single_column: true
		new RedashDashboard(page, wrapper);
	});
};


class RedashDashboard {
	constructor(page, wrapper) {
		this.wrapper = wrapper;
		this.page = page;
		this.siteOrigin = window.location.origin;
		this.pageMain = $(page.main);
		this.pageAction = (
			$(this.wrapper)
				.find('div.page-head div.page-actions')
		);
		this.pageTitle = $(this.wrapper).find('div.title-text');
		this.iframeHtml = `
			<iframe
			id="redash-iframe"
			style="
				border: none;
				width: 100%;
			">
			</iframe>
		`;
		this.init();
	}

	init() {
		// attach iframe
		this.$RedashIframe = $(this.iframeHtml).appendTo(this.pageMain);
		// attatch iframe resizer
		this.resizer();
		// Attach dashboard selector
		this.createSelectionField();
	}

	resizer() {
		window.addEventListener('message', resize, false);
		function resize(event) {
			const RedashIframe = document.getElementById('redash-iframe');
			const frameHeight = event.data.frameHeight;
			RedashIframe.style.height = `${frameHeight + 30}px`;
		}
	}


	createSelectionField() {
			// create dashboard selection field
		this.selectionField = frappe.ui.form.make_control({
		'parent': this.pageAction,
		'df': {
			'fieldname': 'Dashboard',
			'fieldtype': 'Link',
			'options': 'Redash Dashboards',
				'onchange': () => {
					const dashboardName = this.selectionField.get_value();
					if (dashboardName) {
						this.dashboardName = dashboardName;
						this.getSettings();
						this.changeTitle(dashboardName);
						// clear input
						this.selectionField.set_input('');
					}
				},
				'get_query': () => {
					return {
						'filters': {
							'is_active': 1,
						},
					};
				},
				'placeholder': 'Select Dashboard',
			},
			'render_input': true,
		});

		// change css
		this.pageAction.removeClass('page-actions');
		this.selectionField.$wrapper.css('text-align', 'left');
	}

	getSettings() {
		return frappe.call({
			'method': 'redash.redash.page.results_pivot.results_pivot.get_url',
			'args': {
				'dashboard': this.dashboardName,
			},
		});
	}

	changeTitle() {
		this.pageTitle.text(`${this.dashboardName} Dashboard`);
	}
}
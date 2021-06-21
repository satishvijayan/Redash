# -*- coding: utf-8 -*-
# Copyright (c) 2019, Dolores Juliana and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe import _
import jwt
import time


class redashDashboard(Document):
	passx

@frappe.whitelist()
def get_dashboard():
	from frappe.utils import has_common
	user_roles = frappe.get_roles()
	list_dashboard = frappe.get_list("Redash Dashboards", fields=["name","title","url_dashboard"], 
		order_by="dborder", ignore_permissions=True)
	out = []
	for dashboard in list_dashboard:
		dashboard_roles = [d.role for d in frappe.get_all("RedashPerm", 
			filters={"parent": dashboard.name}, fields=["role"], ignore_permissions=True)]
		if has_common(user_roles, dashboard_roles):
			out.append([dashboard.title, dashboard.url_dashboard])
	return out



@frappe.whitelist()
def get_url(dashboard):
	# get metabase info
	redash_config = frappe.get_single('Redash Settings')
	# get dashboard info
	dashboard = frappe.get_doc('Redash Dashboards', dashboard)

	# config token
	payload = {
		'resource': {'dashboard': int(dashboard.dashboard_id)},
		'params': {},
	}
	# set expiration time
	exp_time = metabase_config.metabase_exp_time
	if exp_time:
		payload['exp'] = round(time.time()) + (60 * exp_time)  # 60 second * minute

	# gen token
	token = jwt.encode(
		payload,
		metabase_config.metabase_secret,
		algorithm='HS256'
	)

	# prepare config
	config = []
	if dashboard.show_border:
		config.append('bordered=true')
	else:
		config.append('bordered=false')
	if dashboard.show_title:
		config.append('titled=true')
	else:
		config.append('titled=false')
	if dashboard.theme == 'Dark':
		config.append('theme=night')
	config_param = '&'.join(config)

	# prepare url
	resizer = ''.join([
		metabase_config.metabase_url,
		'/app/iframeResizer.js',
	])
	iframeUrl = ''.join([
		metabase_config.metabase_url,
		'/embed/dashboard/',
		token.decode('utf8'),
		'#',
		config_param,
	])

	return {
		'name': dashboard.dashboard_name,
		'resizer': resizer,
		'iframeUrl': iframeUrl
	}

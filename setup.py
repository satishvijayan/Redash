from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in redash/__init__.py
from redash import __version__ as version

setup(
	name='redash',
	version=version,
	description='Show Redash Dashboards in Frappe',
	author='Charioteer Software Private Limited',
	author_email='satish@charioteersoftware.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)

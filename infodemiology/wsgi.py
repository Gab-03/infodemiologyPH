"""
WSGI config for infodemiology project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/
"""

import os
import sys

# Add the infodemiology project path into the sys.path
sys.path.append('/path/to/your/infodemiology_project_directory')

# Add the virtualenv site-packages path to the sys.path
sys.path.append('/path/to/your/virtualenv_directory/lib/python3.x/site-packages')

# Pointing to the project settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'infodemiology.settings')

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
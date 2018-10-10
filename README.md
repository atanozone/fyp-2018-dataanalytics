# fyp-2018
NTU FYP

PYTHON VirtualEnv

In dev: setup 2 server  DJANGO (as backend api) REACTJS (as frontend)

In Production:
Copy REACTJS /src into DJANGO (like a DJANGO app)

In production env, npm will initialise react together with Django

SETUP:
cd to fyp-portal
Should have virtualenv-lib directory, backend directory, and frontend directory

## Backend side
Initialise virtual environment
> $ source virtualenv-lib/bin/activate

# create the backend project (if not done)
> $ django-admin startproject backend-django

# manage.py initialise the dev server
>  $ python manage.py runserver

Backend folder has “app” directories (/polls, /api) and the ports

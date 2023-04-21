FROM python:3.11.2-alpine3.17
ENV PYTHONUNBUFFERED=1
EXPOSE 8000
<<<<<<< HEAD
WORKDIR /code
COPY requirements.txt .
RUN pip3 install -r requirements.txt
COPY . .
# ENTRYPOINT ["python3"] 
# CMD ["manage.py", "runserver", "0.0.0.0:8000"]
=======
WORKDIR /app 
COPY requirements.txt /app
RUN pip3 install -r requirements.txt --no-cache-dir
COPY . /app 
# ENTRYPOINT ["python3"] 
CMD ["python3","manage.py", "runserver", "0.0.0.0:8000"]
>>>>>>> 6c88d9b2b58ae382ad69f7c9163608668488da22

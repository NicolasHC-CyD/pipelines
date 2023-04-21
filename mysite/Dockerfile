FROM python:3.11.2-alpine3.17
ENV PYTHONUNBUFFERED=1
EXPOSE 8000
WORKDIR /code
COPY requirements.txt .
RUN pip3 install -r requirements.txt
COPY . .
# ENTRYPOINT ["python3"] 
# CMD ["manage.py", "runserver", "0.0.0.0:8000"]

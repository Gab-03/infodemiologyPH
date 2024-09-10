# Base image
FROM python:3.11

# Set the environment variable for the virtual environment
ENV VIRTUAL_ENV=/app/venv
RUN python -m venv $VIRTUAL_ENV

# Ensure the virtual environment is activated
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

# Install system dependencies including HDF5
RUN apt-get update && \
    apt-get install -y \
        libhdf5-dev \
        build-essential \
        python3-dev \
        libffi-dev \
        libssl-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file first to install dependencies
COPY requirements.txt .

# Install Python dependencies into the virtual environment
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

# Set environment variables for Django settings module
ENV DJANGO_SETTINGS_MODULE=infodemiology.settings

# Expose port 8000
EXPOSE 8000

# Set command to run the application using Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "infodemiology.wsgi"]
FROM python:3.11

# Install system dependencies including HDF5
RUN apt-get update && \
    apt-get install -y \
        libhdf5-dev \
        build-essential \
        python3-dev \
        libffi-dev \
        libssl-dev

# Set the working directory
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

# Expose port 8000
EXPOSE 8000

# Command to run the application
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "infodemiology.wsgi"]
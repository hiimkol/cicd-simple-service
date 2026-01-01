# Simple Spring Boot Microservice with CI/CD

This is a simple Spring Boot application with a GitHub Actions CI/CD pipeline.

## Project Structure
- `simple-service`: Contains the Spring Boot source code.
- `.github/workflows/ci.yml`: The GitHub Actions workflow file.

## Prerequisites
- Java 17 or later
- Maven (if running locally)

## Running Locally
Navigate to the `simple-service` directory and run:

### Windows
```bash
./mvnw spring-boot:run
```

### Linux/macOS
```bash
./mvnw spring-boot:run
```

The application will be available at `http://localhost:8080`.

## CI/CD
The `ci.yml` workflow triggers on push to the `main` branch. It performs the following steps:
1. Checkouts the code.
2. Sets up JDK 17.
3. Builds the project using Maven.
4. Runs tests.

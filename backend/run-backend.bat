@echo off
setlocal
echo =========================================
echo Starting FarmLink Backend...
echo =========================================

REM Set JAVA_HOME to the local JDK 17 to fix Lombok and JDK 25 compatibility issues
set JAVA_HOME=%~dp0local-jdk\jdk-17.0.10+7

REM Run the Maven wrapper to start the Spring Boot application
call .\mvnw.cmd clean spring-boot:run

endlocal
pause

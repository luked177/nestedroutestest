# Define the content for the .env file
$envContent = @"
VITE_PATHNAME="/development/portal"
VITE_TEST="THIS IS A TEST"
"@

# Set the file path for the .env file
$envFilePath = ".env"

# Write the content to the .env file
$envContent | Set-Content -Path $envFilePath -Force

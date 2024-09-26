# Define the list of directories
$dirs = @("ecommerce-frontend", "inventory-service", "order-service", "payment-service", "product-service")

# Loop through the directories and open a new tab in Windows Terminal for each one
foreach ($dir in $dirs) {
    # Command to run in each new tab
    $command = "cd $PWD/$dir; yarn start; pause"

    # Start Windows Terminal with a new tab executing the command
    wt -w 0 nt `; sp -c "$command"
}



# Run the PowerShell Script:

#     Right-click the .ps1 file and select "Run with PowerShell", or
#     Open PowerShell, navigate to the directory containing your script, and run it by typing .\start-services.ps1.
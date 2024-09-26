#!/bin/bash

# Define the list of directories
declare -a dirs=("inventory-service" "order-service" "payment-service" "product-service" "ecommerce-frontend" )

# AppleScript that opens a new tab in an existing window or creates a new one if none exists
osascript -e "tell application \"Terminal\"
    if not (exists window 1) then reopen
    activate
    set currentTab to do script \"cd `pwd`\"
end tell"

# Loop through the directories and run each service in a new tab
for dir in "${dirs[@]}"; do
    osascript -e "tell application \"Terminal\"
        tell application \"System Events\" to keystroke \"t\" using {command down}
        do script \"cd `pwd`/$dir && yarn start\" in window 1
    end tell"
done

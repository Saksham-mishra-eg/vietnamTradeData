# Script to replace Turkey with Vietnam across all content files

$files = Get-ChildItem -Path ".." -Include *.tsx,*.ts,*.json,*.md -Recurse -Exclude node_modules,*.next*,.git*,package-lock.json

foreach ($file in $files) {
    try {
        $content = Get-Content $file.FullName -Raw -ErrorAction Stop
        $modified = $content
        
        # Replace in order of specificity
        $modified = $modified -replace "TurkeyTradeData", "VietnamTradeData"
        $modified = $modified -replace "Turkey", "Vietnam"
        $modified = $modified -replace "Turkish", "Vietnamese"
        $modified = $modified -replace "turkeytradedata\.com", "vietnamtradedata.com"
        $modified = $modified -replace "Istanbul", "Hanoi"
        $modified = $modified -replace "\+90", "+84"
        $modified = $modified -replace "Ayse", "Nguyen"
        $modified = $modified -replace "Mehmet", "Tran"
        
        if ($modified -ne $content) {
            Set-Content -Path $file.FullName -Value $modified -NoNewline
            Write-Host "Updated: $($file.FullName)"
        }
    } catch {
        Write-Host "Skipped: $($file.FullName) - $($_.Exception.Message)"
    }
}

Write-Host "Replacement complete!"

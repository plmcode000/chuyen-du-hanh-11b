# -*- coding: utf-8 -*-
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
Clear-Host

Write-Host "========================================================" -ForegroundColor Cyan
Write-Host " HUONG DAN VA HO TRO DAY WEBSITE LEN GITHUB PAGES 24/7" -ForegroundColor Yellow
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Buoc 1: Tao Repository moi tren https://github.com/new" -ForegroundColor White
Write-Host "        - Che do: PUBLIC (bat buoc)" -ForegroundColor Green
Write-Host "        - Khong tick vao 'Add a README file'" -ForegroundColor Green
Write-Host "Buoc 2: Copy link HTTPS (dang: https://github.com/username/ten-repo.git)" -ForegroundColor White
Write-Host ""

# Hien hop thoai Input Box de nguoi dung dan link bang Ctrl + V de dang
Add-Type -AssemblyName Microsoft.VisualBasic
Add-Type -AssemblyName System.Windows.Forms

$promptMsg = "Dán đường link HTTPS GitHub Repository của bạn vào đây:`n`n(Ví dụ: https://github.com/username/20-10-lop-11b.git)"
$repoUrl = [Microsoft.VisualBasic.Interaction]::InputBox($promptMsg, "Đẩy Website 20/10 Lên GitHub Pages", "")

if ([string]::IsNullOrWhiteSpace($repoUrl)) {
    # Neu dong hop thoai thi cho nhap truc tiep o Terminal
    $repoUrl = Read-Host "Hoac nhap truc tiep duong link GitHub tai day (roi an Enter)"
}

if ([string]::IsNullOrWhiteSpace($repoUrl)) {
    Write-Host "`nBan chua nhap link Repository. Vui long chay lai khi da co link." -ForegroundColor Red
    Read-Host "`nNhan Enter de thoat..."
    exit
}

$repoUrl = $repoUrl.Trim()
Write-Host "`nDang ket noi voi: $repoUrl" -ForegroundColor Cyan

# Cau hinh va day len GitHub
git remote remove origin 2>$null
git remote add origin $repoUrl
git branch -M main

Write-Host "Dang day ma nguon len GitHub... Xin vui long cho..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n========================================================" -ForegroundColor Green
    Write-Host " CHUC MUNG! DA PUSH CODE LEN GITHUB THANH CONG!" -ForegroundColor Green
    Write-Host "========================================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "BUOC CUOI CUNG DE WEBSITE CHAY 24/7:" -ForegroundColor Yellow
    Write-Host "1. Vao tab 'Settings' tren GitHub" -ForegroundColor White
    Write-Host "2. Chon muc 'Pages' o menu ben trai" -ForegroundColor White
    Write-Host "3. Tai muc 'Branch', chon 'main' va giu nguyen '/(root)'" -ForegroundColor White
    Write-Host "4. Nhan nut 'Save'" -ForegroundColor White
    Write-Host ""
    
    # Lay link Pages du doan
    if ($repoUrl -match "github\.com[/:]([^/]+)/([^/\.]+)") {
        $user = $matches[1]
        $repo = $matches[2]
        $pageUrl = "https://$user.github.io/$repo/"
        Write-Host "Duong link website 24/7 cua ban se la:" -ForegroundColor Cyan
        Write-Host ">>> $pageUrl <<<" -ForegroundColor Green
        
        # Hoi xem co muon mo trang Settings tren trinh duyet luon khong
        $settingsUrl = "https://github.com/$user/$repo/settings/pages"
        Write-Host "`nDang mo trang Settings Pages tren trinh duyet de ban an Save..." -ForegroundColor Yellow
        Start-Process $settingsUrl
    }
} else {
    Write-Host "`nCo loi xay ra khi push len GitHub." -ForegroundColor Red
    Write-Host "Goi y kiem tra:" -ForegroundColor Yellow
    Write-Host "- Ban da dang nhap GitHub tren may chua?" -ForegroundColor White
    Write-Host "- Link repository da chinh xac va o che do Public chua?" -ForegroundColor White
}

Write-Host ""
Read-Host "Nhan Enter de hoan tat..."

# -*- coding: utf-8 -*-
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
Clear-Host

Write-Host "========================================================" -ForegroundColor Cyan
Write-Host " HO TRO DAY WEBSITE LEN GITHUB PAGES 24/7" -ForegroundColor Yellow
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

$repoUrl = "https://plmcode000@github.com/plmcode000/chuyen-du-hanh-11b.git"

Write-Host "Repository hien tai: https://github.com/plmcode000/chuyen-du-hanh-11b" -ForegroundColor Green
Write-Host "Tai khoan GitHub: plmcode000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Dang thuc hien lenh day code len GitHub..." -ForegroundColor Yellow
Write-Host "Luu y: Neu trinh duyet bat len hop thoai dang nhap, ban hay chon 'Sign in with your browser' de xac nhan!" -ForegroundColor Magenta
Write-Host ""

git branch -M main
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n========================================================" -ForegroundColor Green
    Write-Host " CHUC MUNG! DA PUSH CODE LEN GITHUB THANH CONG!" -ForegroundColor Green
    Write-Host "========================================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "BUOC CUOI CUNG DE WEBSITE CHAY 24/7:" -ForegroundColor Yellow
    Write-Host "1. Trinh duyet dang mo trang Settings Pages cua ban..." -ForegroundColor White
    Write-Host "2. Tai muc 'Branch', ban chon 'main' va nhan nut 'Save'" -ForegroundColor White
    Write-Host ""
    
    $pageUrl = "https://plmcode000.github.io/chuyen-du-hanh-11b/"
    Write-Host "Duong link website 24/7 cua ban se la:" -ForegroundColor Cyan
    Write-Host ">>> $pageUrl <<<" -ForegroundColor Green
    
    Start-Process "https://github.com/plmcode000/chuyen-du-hanh-11b/settings/pages"
} else {
    Write-Host "`nNeu van gap loi 403 Permission Denied:" -ForegroundColor Red
    Write-Host "Cach don gian nhat: Ban co the keo tha truc tiep file len web tai:" -ForegroundColor Yellow
    Write-Host "https://github.com/plmcode000/chuyen-du-hanh-11b" -ForegroundColor Cyan
}

Write-Host ""
Read-Host "Nhan Enter de hoan tat..."

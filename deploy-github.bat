@echo off
chcp 65001 > nul
title Day Website Len GitHub Pages 24/7
echo ========================================================
echo  HUONG DAN VA HO TRO DAY WEBSITE LEN GITHUB PAGES 24/7
echo ========================================================
echo.
echo [BUOC 1] Ban vao https://github.com/new de tao mot Repository moi:
echo          - Repository name: 20-10-lop-11b (hoac ten ban thich)
echo          - Chon che do: PUBLIC (bat buoc de dung GitHub Pages mien phi)
echo          - KHONG tick vao 'Add a README file'
echo          - Nhan nut 'Create repository'
echo.
echo [BUOC 2] Copy duong link HTTPS cua Repository vua tao
echo          (Vi du: https://github.com/username/20-10-lop-11b.git)
echo.
set /p REPO_URL="Dán đường link GitHub Repository của bạn vào đây rồi nhấn Enter: "

if "%REPO_URL%"=="" (
    echo Ban chua nhap link. Vui long chay lai file nay khi da co link.
    pause
    exit /b
)

echo.
echo Dang cau hinh va day code len GitHub...
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo  DA PUSH CODE LEN GITHUB THANH CONG!
    echo ========================================================
    echo.
    echo [BUOC CUOI CUNG - BAT GITHUB PAGES]:
    echo 1. Vao trang Repository tren GitHub cua ban
    echo 2. Nhan vao tab "Settings" (Banh rang o menu tren)
    echo 3. Nhin cot menu ben trai, cuon xuong chon muc "Pages"
    echo 4. Tai phan "Branch", chon "main" va thu muc la "/(root)"
    echo 5. Nhan "Save"
    echo.
    echo Sau 1-2 phut, website cua ban se chay 24/7 tai duong link:
    echo https://<username>.github.io/<ten-repo>/
    echo.
) else (
    echo.
    echo Co loi xay ra khi push. Vui long kiem tra lai quyen dang nhap GitHub hoac link repository.
)

pause

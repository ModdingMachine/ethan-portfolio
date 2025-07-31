@echo off
echo 🤖 Ethan Orr Portfolio - System Prompt Editor
echo.

echo 📝 The system prompt is now stored in: src/lib/chat.ts
echo.

echo 🔧 To update the system prompt:
echo    1. Open src/lib/chat.ts in your code editor
echo    2. Find the system prompt (lines ~10-50)
echo    3. Edit the content as needed
echo    4. Save the file
echo.

echo 📋 Current system prompt:
echo ----------------------------------------
powershell -Command "Get-Content 'src/lib/chat.ts' | Select-String -Pattern 'You are Ethan' -Context 0,40"
echo ----------------------------------------
echo.

echo 💡 Tips for editing the system prompt:
echo    - Keep it concise but informative
echo    - Include key background information
echo    - List expertise and projects
echo    - Specify the tone and behavior
echo.

pause 
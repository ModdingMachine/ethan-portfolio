# 📱 Apple Shortcut Setup Guide

This guide will walk you through creating an Apple Shortcut that logs your activities to your portfolio's database.

## 🎯 What You'll Create

A shortcut that:
1. Asks for your name
2. Asks what activity you did
3. Asks for your dopamine level (0-10)
4. Automatically logs this data to your Supabase database
5. Shows a success message

## 📋 Prerequisites

- iPhone or iPad with iOS 13 or later
- Shortcuts app installed
- Your portfolio deployed to `ethanorr.me`

## 🚀 Step-by-Step Setup

### Step 1: Open Shortcuts App
1. Find and open the **Shortcuts** app on your device
2. Tap the **+** button in the top right to create a new shortcut

### Step 2: Add First Input Action
1. Tap **+** to add an action
2. Search for **"Ask for Input"**
3. Tap on **Ask for Input**
4. Configure it:
   - **Prompt:** "What's your name?"
   - **Variable Name:** `name` (tap the variable name to edit)

### Step 3: Add Second Input Action
1. Tap **+** again
2. Search for **"Ask for Input"**
3. Tap on **Ask for Input**
4. Configure it:
   - **Prompt:** "What activity did you do?"
   - **Variable Name:** `activity`

### Step 4: Add Third Input Action
1. Tap **+** again
2. Search for **"Ask for Input"**
3. Tap on **Ask for Input**
4. Configure it:
   - **Prompt:** "Dopamine level (0-10)?"
   - **Input Type:** Number
   - **Variable Name:** `dopamine`

### Step 5: Add Date Action
1. Tap **+** again
2. Search for **"Get Current Date"**
3. Tap on **Get Current Date**
4. Configure it:
   - **Format:** ISO 8601
   - **Variable Name:** `timestamp`

### Step 6: Add URL Action
1. Tap **+** again
2. Search for **"Get Contents of URL"**
3. Tap on **Get Contents of URL**
4. Configure it:
   - **URL:** `https://ethanorr.me/api/log`
   - **Method:** POST
   - **Headers:** Add a new header:
     - **Key:** `Content-Type`
     - **Value:** `application/json`
   - **Body:** JSON
   - **JSON Content:**
   ```json
   {
     "name": "{{name}}",
     "timestamp": "{{timestamp}}",
     "activity": "{{activity}}",
     "dopamine": "{{dopamine}}"
   }
   ```

### Step 7: Add Success Message
1. Tap **+** again
2. Search for **"Show Result"**
3. Tap on **Show Result**
4. Configure it:
   - **Text:** "Activity logged successfully! 🎉"

### Step 8: Name Your Shortcut
1. Tap the shortcut name at the top
2. Name it: **"Log Activity"**
3. Tap **Done**

## 🧪 Testing Your Shortcut

1. **Run the shortcut** by tapping the play button
2. **Enter test data:**
   - Name: "Test User"
   - Activity: "Testing the shortcut"
   - Dopamine: 8
3. **Check for success message**
4. **Verify in Supabase:**
   - Go to your Supabase dashboard
   - Check the `logs` table
   - You should see your test entry

## 📱 Adding to Home Screen

1. **Long press** on your shortcut
2. Tap **"Share"**
3. Tap **"Add to Home Screen"**
4. Customize the icon and name
5. Tap **"Add"**

## 🔧 Troubleshooting

### Common Issues:

**"Could not connect to the server"**
- Check your internet connection
- Verify the URL is correct: `https://ethanorr.me/api/log`
- Make sure your portfolio is deployed

**"The request timed out"**
- The API might be cold-starting
- Try running the shortcut again
- Check if your Supabase is accessible

**"Invalid response"**
- Check that all fields are filled out
- Ensure dopamine is a number between 0-10
- Verify the JSON format in the URL action

### Debug Steps:
1. **Test the API directly:**
   ```bash
   curl -X POST https://ethanorr.me/api/log \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","activity":"Debug","dopamine":5}'
   ```

2. **Check the health endpoint:**
   - Visit: `https://ethanorr.me/api/health`
   - Should return: `{"status":"OK","message":"API is running"}`

## 🎨 Customization Ideas

### Add Icons
- Use emoji in the shortcut name
- Add custom icons from the Shortcuts gallery

### Add Sound
- Add a "Play Sound" action after success
- Choose a satisfying sound effect

### Add Haptic Feedback
- Add "Haptic Feedback" action
- Set to "Success" pattern

### Add to Share Sheet
1. Go to **Settings** → **Shortcuts**
2. Tap **"Add to Share Sheet"**
3. Enable for apps you want to share from

## 📊 Data Usage

Your logged data will include:
- **Name:** Who logged the activity
- **Activity:** What you did
- **Dopamine:** How satisfying it was (0-10)
- **Timestamp:** When it happened
- **Created At:** When it was logged to database

## 🔒 Privacy & Security

- Data is stored in your Supabase database
- Only you have access to your data
- No personal information is shared
- API endpoint is public but only accepts valid data

## 🎯 Next Steps

Once your shortcut is working:

1. **Add data visualization** to your portfolio
2. **Create analytics** to track patterns
3. **Add notifications** for daily reminders
4. **Create multiple shortcuts** for different activity types

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Verify your Supabase connection
3. Test the API endpoints manually
4. Check your deployment status

---

**Happy logging! 📝✨**

# Rally

A small desktop app that shows one motivational quote when you need a push. It runs quietly in the tray (the menu bar on Mac), works offline, and only measures timing (pauses, typing pace), never what you type.

## Install

**Windows:** run `Rally_1.0.0_x64-setup.exe`. No admin rights are needed. Windows may say "Windows protected your PC" because the app isn't code-signed. Click **More info → Run anyway**.

**Mac:** open the `.dmg` and drag Rally into Applications. The first time, right-click Rally and choose **Open**, because the app isn't notarised. To let Rally notice slower typing, allow it under **System Settings → Privacy & Security → Accessibility**. Pauses are detected without this.

## Using it

- **Tray menu:** *Show a quote now*, *Settings…*, *Snooze today*, *Quit Rally*.
- **Settings:** choose **Automatic** (Rally decides) or **Scheduled** (your own times and days).
- **Popup:** drag it anywhere and resize it from the edges or corners; it remembers where you left it. Hover it for 👍/👎, 🚩 (report: that quote never shows again), *Snooze today* and the genre tabs.
- **Reported quotes:** see them in Settings. *Copy list* copies them so you can send them on.

## Building it yourself

You need Node 22 and Rust.

```bash
npm ci
npx tauri build
```

The GitHub workflow in `.github/workflows/build.yml` builds the Mac (Apple Silicon + Intel) and Windows installers on GitHub's servers.

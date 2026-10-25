# Push Command Rule

When the user says "push", execute `npm run push`.

## Details
- **Command**: `npm run push`
- **Behavior**: Stages all changed files, creates a commit with the message `"commit push"`, and pushes to the remote git branch (`git add . && git commit -m "commit push" && git push`).

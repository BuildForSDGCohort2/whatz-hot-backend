## PRs, Commits and Branching

For this project, please apply the following guides and naming conventions

### Issues
  - Attach the issue to the project from the drop-down on the right sidebar menu
  - Attach the issue to the appropriate milestone
  - Issue title format: Issue title - [type]: Short description
  - Only use appropriate issue template for the issue being addressed
  - Remove section placeholders and fill in the details where applicable

### Commit messages
We will be dealing with 4 types of commits - use the appropriate prefix : 
  - feat - new feature, 
  - bug - problem discovered in an existing feature, 
  - chore - setup and project, 
  - docs - for anything documentation related.
  - refactor - code refactor
  - test - for unit/integration tests

### Branch naming
We use the github workflow and our default/staging branch is the **develop** branch.\
**Note!!!:** Never work directly on the **develop** branch. Create a feature branch locally for any new task you are working on and push this branch to create a new PR on github.\
\
Name your branches as indicated below:
  - ft - new feature branch 
  - bg - a branch to fix a bug
  - ch - chores
  - doc - for documentation

### Git/GitHub workflow guide: (If you are not very familair with git/github)
  **Creating a local copy (clone) of the repository**

  - Go to the project repo https://github.com/BuildForSDGCohort2/whatz-hot-backend and on the main page, click on fork to create a fork of this repo in your github account. On you gihub account you should have a fork like this with your github username https://github.com/your-username/whatz-hot-backend/

  - On your fork click on Clone or Download button and copy the link provided

  - Open a new terminal/shell/command prompt. Ensure you have `git` installed locally and `git` is accessible from the terminal/shell/command prompt. For windows users you may use git-bash, cmd.exe or Powershell. For linux and Mac users you may use your normal terminal program.

  - In your terminal go to a folder of your choice where you intend to save your work. To clone your forked repo locally type git clone repo-name.git within your chosen folder. A new folder should be created inside called `whatz-hot-backend` (run all your git commands within this folder).

  - Go into `whatz-hot-backend` folder and run `git checkout develop` to switch to the `develop` branch. Please, do not work from the master branch!

  - Create a new feature branch off the `develop` branch to do your work from e.g myNewBranch. Run `git checkout -b myNewBranch`

  **Creating a pull Request:**

  - When you are certain everything works well, stage your changes with `git add . `

  - Commit your changes with an appropriate message e.g:  `git commit -m "feat: add my script"`

  - Push your work branch to your fork - `git push origin myNewBranch`

  - On github, go to the project repo https://github.com/BuildForSDGCohort2/whatz-hot-backend ,not your fork. 

  - You should see a prompt saying that your pushed branch was detected giving you the opportunity to create a new pull request. Click the create pull request button and you will be taken to a screen to do so.

  - On the creating pull request (PR) page, give your PR an appropriate title and optionally, a brief description. Then click the create pull request button. Your PR is successful.

  - Your PR will be reviewed for approval, to ensure there are no potential bombs :). Request a review.

  - After the reviewers check your work and it is approved, your PR will be merged. Otherwise, make the requested changes locally on the same branch, then commit your changes and push your changes again.

  **Syncing your Local Repo with Latest Changes**

  - Assuming your PR has been merged and closed and your new feature now lives in the `develop` branch of the project repo. You need to sync your local repo with the changes since the last time you cloned it so that your new features and other newer features will be brought down to your local `develop` branch.

  - Run git checkout `develop` to switch to the `develop` branch

  - If you have created upstream remote before skip this step. Run `git remote add upstream https://github.com/BuildForSDGCohort2/whatz-hot-backend`  to add a remote called upstream, which is now pointing to the original project repo. Your fork's remote is called origin

- Run `git fetch upstream` to fetch latest changes

- Ensuring you are on the `develop` branch (`git checkout develop`), run `git merge upstream/develop` to merge those changes into your local `develop` branch.

- To start work on a new feature, create a new branch, with a new name by running `git checkout -b diffbranchName` and continue your work.
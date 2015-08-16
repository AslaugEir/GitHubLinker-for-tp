GitHubLinker-for-tp
===================

A small Usermonkey/Tampermonkey script that inserts a link to a GitHub search to targetprocess pages that contain references to source code commits, as added by the targetprocess GitHub plugin.

## Features

If you are using targetprocess and github, you probably find targetprocess [github plugin](https://guide.targetprocess.com/integrations/git.html) very useful. However, that plugin does not include any referency to your code on gitHub, such as any pull requests the commit might belong to. This small script pulls the sha of the commit messages available through targetprocess github plugin, and adds a link to a github search of the sha to the targetprocess entity you are viewing. This means that it only takes you a click or two to find any unreviewed pull requests that are relevant to the task or userstory you are viewing in targetprocess. 

## Known shortcomings

* As the targetprocess page and plugin rely heavily on javascript to completely load, this initial solution waits in the background for a few seconds and then runs. Future improvements could include a way to run this scipt only when all other scripts have finished. 

## How to install / use

In Chrome, Opera or Safari, install/add the Tampermonkey extension and add this code as one of your scripts
In Firefox, install/add the Greasemonkey extension and add this code as one of your scripts

---
title: "LibrePhotos Docs: How-To"
excerpt: "How to use contribute to the LibrePhotos documentation."
last_modified_at: 2020-01-18
category: 3
---

## Overview

This documentation is a one-stop-shop for all resources for LibrePhotos - from installation (including one-off cases), to how the code actually works.

If you're looking to help us develop our documentation, it's as simple as submitting a pull request to [the librephotos.docs repository](https://github.com/LibrePhotos/librephotos.docs/wiki "librephotos.docs").

Now below is just some quick information on our standardized category names and file naming convention. Please see the [wiki](https://github.com/LibrePhotos/librephotos.docs/wiki "") for more tips and ticks for formatting the document pages. 

## Categories explained

Categories how we organize all the articles. Categories have to be declared in the file name, and in the file itself.

{% assign categories_table = "| Category Name | Category Number |
| ---- | :----: |" %}
{% for category in site.data.categories %}
{% assign categories_table = categories_table | append: "
| " | append: category.name | append: " | " | append: category.id | append: " |" %}
{% endfor %}

{{ categories_table }}

Let's take a moment to look at each section of the file name. 

### File Names

File names are very easy to get right once you understand how they work. The name of the file can be broken up into 4 sections; an example valid file name would be `0000-03-01-documentation.md `.

#### First group of numbers

This should always be `0000`.

#### Second group of numbers

This is the category number from above, and should always be two digits. In the case of our example, this is `03`, meaning the article is from the `Contribution` category.

#### Third group of numbers

Article number. This sets the order that the articles should appear in, starting at 01, and should always be two digits. In the case of our example, this is `01`, meaning the article is the first in its category.

#### Text section 

This one is easy: it is just a short descriptive name of the article. Must end in `.md`. 

### Front Matter

At the start of each page, there needs to be header info, so that the documents can be built correctly. The minimum requirement is: 

```markdown
---
title: "Article Title"
excerpt: "A short description of what the article is about."
last_modified_at: 2020-01-18
category: 1
---
```

Ensure you use a category ID from the table above.

## Local preview
You can see what the documents will look like before you submit your pull request by setting up a local environment to do so. It is pretty easy really. 

1. Linux
 - Coming soon. 
2. Windows
    1. Install Ruby 2.7 with build kit, you can get it from [here](https://rubyinstaller.org/downloads/ "ruby") Note: Do not install 3.x it will not work. 
    2. Open a command prompt and run ```markdown gem install jekyll bundler ``` 
    3. In the same command prompt go to where you have the librephotos.doc git repo cloned and run ``` markdown bundle install ```
    4. It is not time to run the webserver so you can see your edits. In the same command prompt run ``` markdown bundle exec jekyll serve ```. You can now see your local edits live at [127.0.0.1:4000](http://127.0.0.1:4000 "yes local host port 4000")
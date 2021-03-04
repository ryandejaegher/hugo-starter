---
title: "Cheat Sheet"
date: 2018-01-11T16:03:33-05:00
draft: true
layout: single-left
---



<input class="border-2" type="text">
{{< time.inline >}}

{{ range .Site.Data.squarespace.test}}
<p>{{.}}</p>
{{end}}

<script>

var data = {{ .Site.Data.squarespace.test | jsonify  }}
</script>

{{< /time.inline >}}
 
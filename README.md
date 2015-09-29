#Overview:
Provide functions computing analytics for [Hawaii Directory of Green Employers](https://data.hawaii.gov/Employment/Hawaii-Directory-Of-Green-Employers/mq86-5ta6)

#Installation:
Provide the following scripts

```
<script src="//philipmjohnson.github.io/ics314f15/morea/underscore/underscore-min.js"></script>
<script src="//philipmjohnson.github.io/ics314f15/morea/underscore/greenjobs.js"></script>
<script src="greenjobs.js"></script>
```

#Usage
Examples of function calls
```
<script>
  console.log("Industry List", listIndustries(greenjobs));
  console.log("Green Jobs", countyGreenJobs(greenjobs));
  console.log("PV Jobs", jobswithKeyword(greenjobs, "PV"));
  console.log("Industry Jobs", industryJobs(greenjobs));
  console.log("Industry Jobs Max", maxIndustryJobs(greenjobs));
</script>
```

#Credits
Credit to [Underscore](http://underscorejs.org/) library. 



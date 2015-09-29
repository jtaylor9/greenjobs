/*global _*/
/*exported listIndustries*/
/*exported countyGreenJobs*/
/*exported jobswithKeyword*/
/*exported countyGreenJobs*/
/*exported countyGreenJobs*/

/**
 * Passed greenjobs and returns an array of strings indicating all the industries in the dataset (no duplicates).
 * @param data
 * @returns {Array}
 */
function listIndustries(data){
  return _.uniq(_.pluck(data, 'Industry'));
}

/**
 * Passed greenjobs. Returns an object where the keys are County names and the values are the number of Green Jobs listed in that County.
 * @param data
 * @returns {Object}
 */
function countyGreenJobs(data){
  return _.countBy(data,function(num){
    return num['County'];
  });
}

/**
 * Passed greenjobs and a string and returns a list of Job Titles containing the passed string.
 * @param data
 * @param keyword
 * @returns {*}
 */
function jobswithKeyword(data, keyword){
  var jobs = _.filter(data, function(num){ return num['Job Title'].indexOf(keyword) !== -1; });

  return _.pluck(jobs, 'Job Title');
}

/*

 *  This function can be passed greenjobs and returns an array containing objects with keys “industry” and “jobs”. The value of the industry key is an industry name, and the value of jobs is the number of jobs associated with that industry
 * @param data

function industryJobs(data) {

}


 * Passed greenjobs and returns an array containing objects with keys “industry” and “jobs”. The value of the industry key is an industry name, and the value of jobs is the number of *jobs associated with that industry.
 * @param data

function maxIndustryJobs(data) {

}
*/
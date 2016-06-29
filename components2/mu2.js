//this is the module that was injected...came from components1 

angular.module('mu', [])
  .directive('muCohort', function() {
  return {
    scope:{},
    restrict: 'E',
    link: function(scope,element,attribute){
      scope.cohortMember = attribute.first + ' ' + attribute.last
    },
    template:"<h3>{{cohortMember}}</h3>"
  }
})

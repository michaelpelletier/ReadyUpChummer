
Shadowrun.Directives.directive('myTable', function ($compile) {
  return {
    restrict: 'E',
    link: function (scope, element, attrs) {
      var html = '<div class="skills_table">';
      angular.forEach(scope[attrs.rows], function (row, index) {
        
        // Category
        html += '<div class="list-item skill_category"><h2>' + row.category + '</h2></div>';
        
        if ('groups' in row) {
          angular.forEach(row.groups, function (group, index) {
            // Only render if Group exists.
            if (group.name !== "Misc") {
              html += '<div class="list-item skill_group"><span class="yellow">' + group.name + '</span><span class="ranks" ng-bind="my_skills.' + group.id + '.ranks"></span></div>';
            }

            if ('skills' in group) {
              angular.forEach(group.skills, function (skill, index) {
                var attributes = "'" + skill.attribute + "'";
                var skill_information = skill.id + "," + attributes;

                html += '<div class="list-item skill"><span class="skill_name" data-id="' + skill.id + '" ng-click="add_specialty(' + skill.id + ')">' + skill.name + '</span>';
                html += '<span class="dice_pool" ng-bind="get_dice_pool(' + skill.id + ')"></span>';
                html += '<span class="ranks" ng-bind="my_skills.' + skill.id + '.ranks"></span>';
                html += '<span class="attribute"><span ng-bind="my_attributes[' + attributes + '].current"></span> (' + skill.attribute + ')</span>';
                html +=  '<div class="controls"><span ng-click="add_skill_rank(' + skill_information + ')" class="add">+</span><span ng-click="remove_skill_rank(' + skill.id + ')" class="sub">-</span></div></div>';
              });
            }

          });
        }
      })
      html += '</div>';

      var text = $compile(html)(scope);
      element.append(text);

    }
  }
});
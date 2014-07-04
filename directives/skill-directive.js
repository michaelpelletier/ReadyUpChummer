Shadowrun.Directives.directive('skillsSection', function ($compile) {
  return {
    link: function (scope, element, attrs) {
      scope.$on('priority_change', function(event, row, column) {
        var skill_priority = scope.priorities['skills'];
        var single = 0;
        var group = 0;

        switch(skill_priority) {
          case "A":
            single = 46;
            group = 10;
          break;
          case "B":
            single = 36;
            group = 5;
          break;
          case "C":
            single = 28;
            group = 2;
          break;
          case "D":
            single = 22;
            group = 0;
          break;
          case "E":
            single = 10;
            group = 0;
          break;
          case "": // If skills are being cleared.
            single = 0;
            group = 0;
          break
        }

        clear_skills();
        scope.skill_points = {single: single, group: group};
      }); 

      function clear_skills() {
        scope.my_skills = {};
        $('.skill_specialty').each(function() {
          $(this).remove();
        });
      }

      scope.$on('add_specialty', function(event, skill_id) {
        var html = '<div class="list-item skill skill_specialty"><span class="skill_name"><input value="New Skill"></span><span class="dice_pool">(+2)</span><span class="ranks"></span><span class="attribute"></span><div class="controls"><div class="clear yellow" ng-click="remove_specialty($event)">x</div></div></div>';

        var html = $compile(html)(scope);
        $('[data-id="' + skill_id + '"]').append(html);
      });

      scope.$on('remove_specialty', function(event, specialty) {
        $(specialty).parents('.skill_specialty').remove();
      })
    }
  }
});

Shadowrun.Directives.directive('myTable', function ($compile) {
  return {
    restrict: 'E',
    link: function (scope, element, attrs) {
      var html = '<div class="skills_table">';
      angular.forEach(scope[attrs.rows], function (row, index) {
        
        // Category
        html += '<div class="list-item skill_category">';
        html +=   '<h2 ng-model="hide_' + row.id + '" ng-click="hide_' + row.id + '=!hide_' + row.id + '">';
        html +=     row.category;
        html +=     '<span class="toggle" ng-class="{closed: hide_' + row.id + '}"></span>';
        html +=     '<div class="labels">';
        html +=       '<span class="label dice">Dice Pool</span>';
        html +=       '<span class="label ranks">Ranks</span>';
        html +=       '<span class="label attr">Attribute</span>';
        html +=     '</div>';
        html +=   '</h2>';


        if ('groups' in row) {
          html += '<div class="category_skills" ng-hide="hide_' + row.id + '">';

          angular.forEach(row.groups, function (group, index) {
            // Only render if Group exists.
            if (group.name !== "Misc") {
              html += '<div class="list-item skill_group" data-id="' + group.id + '">';
              html +=   '<span class="yellow group_name">';
              html +=     group.name;
              html +=   '</span>';
              html +=   '<span class="ranks group" ng-bind="my_skills.' + group.id + '.ranks">';
              html +=   '</span>';
              html +=   '<div class="controls">';
              html +=     '<span ng-click="add_group_rank(' + group.id + ')" class="add">+</span>';
              html +=     '<span ng-click="remove_group_rank(' + group.id + ')" class="sub">-</span>';
              html +=   '</div>';
            }

            if ('skills' in group) {
              angular.forEach(group.skills, function (skill, index) {
                var attributes = "'" + skill.attribute + "'";
                var skill_information = skill.id + "," + attributes;

                html += '<div class="list-item skill" data-id="' + skill.id + '" data-attribute="' + skill.attribute + '" >';
                html +=   '<span class="skill_name" ng-click="add_specialty(' + skill.id + ')" title="Click to add Specialty">';
                html +=     skill.name;
                html +=   '</span>';
                html +=   '<span class="dice_pool" ng-bind="get_dice_pool(' + skill.id + ')"></span>';
                html +=   '<span class="ranks" ng-bind="my_skills.' + skill.id + '.ranks"></span>';
                html +=   '<span class="attribute">';
                html +=     '<span ng-bind="my_attributes[' + attributes + '].current"></span>'; 
                html +=     ' (' + skill.attribute + ')';
                html +=   '</span>';
                html +=   '<div class="controls">';
                html +=     '<span ng-click="add_skill_rank(' + skill_information + ')" class="add">+</span>';
                html +=     '<span ng-click="remove_skill_rank(' + skill.id + ')" class="sub">-</span>';
                html +=   '</div>';
                html += '</div>';
              });
            }

            if (group.name !== "Misc") {
              html +=  '</div>';
            }

          });

          html += '</div>';
        }

        html += '</div>';
      });
      html += '</div>';

      var text = $compile(html)(scope);
      element.append(text);
    }
  }
});

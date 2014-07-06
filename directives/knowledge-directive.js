var index;

Shadowrun.Directives.directive('knowledgeSkills', function ($compile) {
  return {
    link: function (scope, element, attrs) {

      index = 20000;

      $(element).find('.add_skill').click(function() {
        var html = '<div>';
        var attribute = $(this).attr('data-attribute');
        var type = "'Knowledge'";
        var skill_add_info = index + "," + "'" + attribute + "'" + "," + type;
        var skill_remove_info = index + "," + type;

        html += '<div class="list-item skill" data-id="' + index + '" data-attribute="' + attribute + '" >';
        html +=   '<span class="skill_name" ng-click="add_specialty(' + skill_remove_info + ')" title="Click to add Specialty">';
        html +=     '<input value="Enter Knowledge Skill">';
        html +=   '</span>';
        html +=   '<span class="dice_pool" ng-bind="get_dice_pool(' + index + ')"></span>';
        html +=   '<span class="ranks" ng-bind="my_skills.' + index + '.ranks"></span>';
        html +=   '<span class="attribute">';
        html +=     '<span ng-bind="my_attributes[' + "'" + attribute + "'" + '].current"></span>'; 
        html +=     ' (' + attribute + ')';
        html +=   '</span>';
        html +=   '<div class="controls">';
        html +=     '<span ng-click="add_skill_rank(' + skill_add_info + ')" class="add">+</span>';
        html +=     '<span ng-click="remove_skill_rank(' + skill_remove_info + ')" class="sub">-</span>';
        html +=   '</div>';
        html += '</div>';
        html += '</div>';

        var skill = $compile(html)(scope);
        $(this).parents('.list-skill-group').find('.skills').append(skill);

        index += 1;        
      });
    }
  }
});

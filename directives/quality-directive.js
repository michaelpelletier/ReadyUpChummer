Shadowrun.Directives.directive('qualityItem', function ($compile) {
	return {
    link: function(scope, elm, attr){

      $(elm).mouseenter(function(){
        $(elm).find('.quality_hover').removeClass('hidden');
      }).mouseleave(function() {
        $(elm).find('.quality_hover').addClass('hidden');
      });

      $(elm).find('.quality_name').click(function() {
        var html = '';
        var quality_name = $(this).text();
        var point_value = parseInt($(elm).attr('data-points'));

        html += '<div class="quality_mine" data-points="' + point_value + '" ng-click="remove_quality($event)">';
        html += quality_name;
        html += '</div>';
        html = $compile(html)(scope);

        $('.my_quality_list').append(html)

        scope.update_quality_points(point_value);
      });
    } 
  } 
});

Shadowrun.Directives.directive('qualityTiered', function ($compile) {
  return {
    link: function(scope, elm, attr){

      $(elm).mouseenter(function(){
        $(elm).find('.quality_hover').removeClass('hidden');
      }).mouseleave(function() {
        $(elm).find('.quality_hover').addClass('hidden');
      });
    } 
  } 
});

Shadowrun.Directives.directive('qualityRanking', function ($compile) {
  return {
    link: function(scope, elm, attr){

      $(elm).click(function() {
        var html = '';
        var quality_name = $(elm).parents('.levels').find('.quality_name').text();
        var ranking = $(elm).attr('data-ranking');
        var point_value = parseInt($(elm).attr('data-points'));

        html += '<div class="quality_mine" data-points="' + point_value + '" ng-click="remove_quality($event)">';
        html += quality_name;
        html += ' (Rating ' +  ranking + ')';
        html += '</div>';
        html = $compile(html)(scope);

        $('.my_quality_list').append(html)

        scope.update_quality_points(point_value);
      });
    } 
  } 
});

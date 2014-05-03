describe('Shadowrun', function () {
  describe('ShadowrunCtrl', function () {
    var $scope;
    var ctrl;

    beforeEach(module('shadowrun_app'))

    beforeEach(inject(function ($injector) {
      $scope = $injector.get('$rootScope');
      $controller = $injector.get('$controller');
      $timeout = jasmine.createSpy('$timeout');

      ctrl = $controller('ShadowrunCtrl', {
        $scope: $scope,
        $timeout: $timeout
      });
    }));

    describe('#check_disabled', function() {
      describe('When you have a priority selected', function() {
        var option;

        beforeEach(function() {
          $scope.chosen_priorities = {"A": 'metatypes', "B": '' , "C": '', "D": '', "E": ''}
          $scope.settings = [
            { value: 'A', selectable: true, chosen: false, type: 'metatypes'},
            { value: 'A', selectable: true, chosen: false, type: 'skills'}
          ]
        });

        it('Is marks your priority as being chosen', function() {
          option = $scope.settings[0];
          $scope.check_disabled(option);
          expect(option.chosen).toBe(true);
          expect(option.selectable).toBe(false);
        });

        it('Disables other options at that priority', function() {
          option = $scope.settings[1];
          $scope.check_disabled(option);
          expect(option.selectable).toBe(false);
          expect(option.chosen).toBe(false);
        });
      });
    });
  });
});
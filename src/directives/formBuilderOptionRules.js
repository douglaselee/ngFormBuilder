/**
* A directive for editing a component's rules.
*/
module.exports = function() {
  return {
    restrict: 'E',
    replace: true,
    // Controller added for ace editor
    controller: ['$scope', function($scope) {
      $scope.change = function() {
        //console.log($scope.component.rules);
      };

      $scope.aceOptions = {
        useWrapMode: true,
        showGutter: true,
        theme: 'dawn',
        mode: 'javascript',
        showIndentGuides: true,
        showPrintMargin: false,
        onLoad: function(editor) {
          // Disable message: 'Automatically scrolling cursor into view after selection change this will be disabled in the next version set editor.$blockScrolling = Infinity to disable this message'
          editor.$blockScrolling = Infinity;
          //editor.getSession().setMode('ace/mode/javascript');
          //editor.setTheme('ace/theme/dawn');
        }
      };
    }],
    template: '' +
      '<div class="panel panel-default" id="accordion">' +
        '<div class="panel-heading" data-toggle="collapse" data-parent="#accordion" data-target="#rulesSection">' +
          '<span class="panel-title">Rules</span>' +
        '</div>' +
        '<div id="rulesSection" class="panel-collapse collapse in">' +
          '<div class="panel-body">' +
          //'<textarea class="form-control" rows="10" id="rules" name="rules" ng-model="component.rules" placeholder="">{{ component.rules }}</textarea>' +
            '<div ui-ace="aceOptions" ng-model="component.rules" ng-change="change()" style="height: 400px;"></div>' +
            '<br>' +
            '<small>' +
              '<p>Enter rules code.  The global variables <strong>data</strong> and <strong>components</strong> are provided.</p>' +
            '</small>' +
            '<ng-form>' +
              '<form-builder-option property="runRulesOnLoad"></form-builder-option>' +
              '<form-builder-option property="runRulesOnChange"></form-builder-option>' +
            '</ng-form>' +
          '</div>' +
        '</div>' +
      '</div>'
  };
};

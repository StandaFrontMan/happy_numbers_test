$(document).ready(function () {
  const multiplier = 8;
  let currentExample = 1;
  const maxExamples = 10;
  let currentInputElement = null;

  function createExample() {
    const exampleDiv = $('<div class="example"></div>');
    const exampleText = $(`<span>${multiplier} × ${currentExample} = </span>`);
    const inputElement = $('<input type="number" class="input" />');

    inputElement.on("focus", function () {
      currentInputElement = $(this);
    });

    exampleDiv.append(exampleText, inputElement);
    $(".examples").append(exampleDiv);
    exampleDiv.hide().fadeIn(500);

    if ($(".examples .example").length > maxExamples) {
      $(".examples .example")
        .first()
        .fadeOut(500, function () {
          $(this).remove();
        });
    }

    $(".check-button").prop("disabled", true).addClass("disabled");
  }

  function handleInput() {
    if (!currentInputElement) return;

    const userAnswer = parseInt(currentInputElement.val(), 10);
    const correctAnswer = multiplier * currentExample;

    if (userAnswer === correctAnswer) {
      currentInputElement.addClass("right").prop("disabled", true);
      $(".check-button").addClass("right");
      renderDice(multiplier);
      currentExample++;

      if (currentExample > maxExamples) {
        $(".done-button").show();
      } else {
        setTimeout(createExample, 500);
      }

      $(".check-button").removeClass("wrong");

      setTimeout(() => {
        $(".check-button").removeClass("right");
      }, 500);
    } else {
      $(".check-button").addClass("wrong");
      setTimeout(() => {
        $(".check-button").removeClass("wrong");
      }, 1000);

      currentInputElement.addClass("wrong");
      setTimeout(() => {
        currentInputElement.removeClass("wrong");
      }, 1000);

      $(".check-button").removeClass("right");
    }

    currentInputElement = null;
  }

  function renderDice(amount) {
    const diceGrid = $(".dice-grid");

    const diceRow = $('<div class="dice-row"></div>');

    _.times(amount, () => {
      const cell = $('<div class="dice-cell"></div>');
      diceRow.append(cell);
    });

    diceGrid.append(diceRow);
  }

  $(document).on("click", ".check-button", function () {
    handleInput();
  });

  $(document).on("input", ".input", function () {
    const inputField = $(this);
    const value = inputField.val();
    const isAnyFieldFilled = $(".input")
      .toArray()
      .some((input) => $(input).val() !== "");
    $(".check-button")
      .prop("disabled", !isAnyFieldFilled)
      .toggleClass("disabled", !isAnyFieldFilled);
  });

  createExample();
});

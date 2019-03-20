<?php

class StringCalculator
{
  // the key to refactoring is to make small changes to help make the code readable
  const MAX_NUMBER_ALLOWED = 1000;

  public function add($numbers)
  {
    $numbers = $this->parseNumbers($numbers);

    $solution = 0;

    foreach ($numbers as $number)
    {
      if($number == '') return 0;
      if($number >= self::MAX_NUMBER_ALLOWED) continue;
      if($number < 0) throw new InvalidArgumentException;
      $solution += $number;
    }
    
    return $solution;
  }
  function parseNumbers($numbers)
  {
    return array_map('intval', preg_split('/\s*(,|\\\n)s*/', $numbers));
  }
}
 
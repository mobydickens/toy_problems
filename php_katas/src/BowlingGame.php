<?php

class BowlingGame
{
  protected $rolls = [];

  function roll($pins)
  {
    $this->guardAgainstInvalidRoll($pins);
    $this->rolls[] = $pins;
  }

  function score()
  {
    $score = 0;
    $roll = 0;

    for($frame = 1; $frame <= 10; $frame++)
    {
      if($this->isStrike($roll))
      {
        $score += 10 + $this->strikeBonus($roll);
        $roll += 1;
        continue;
      } 
      if ($this->isSpare($roll))
      {
        $score += 10 + $this->spareBonus($roll);
      }
      else 
      {
        $score += $this->getDefaultFrameScore($roll);
      }
      $roll += 2;
    }
    return $score;
  }

  // Extract methods to make code explain itself
  function getDefaultFrameScore($roll)
  {
    return $this->rolls[$roll] + $this->rolls[$roll + 1];
  }
  function isSpare($roll)
  {
    return $this->rolls[$roll] + $this->rolls[$roll + 1] == 10;
  }
  function isStrike($roll)
  {
    return $this->rolls[$roll] == 10;
  }
  private function strikeBonus($roll)
  {
    return $this->rolls[$roll + 1] + $this->rolls[$roll + 2];    
  }
  private function spareBonus($roll)
  {
    return $this->rolls[$roll + 2];
  }
  private function guardAgainstInvalidRoll($pins)
  {
    if($pins < 0)
    {
      throw new InvalidArgumentException;
    }
  }
}


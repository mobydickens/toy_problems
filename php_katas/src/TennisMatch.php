<?php

class TennisMatch
{

  // the goal isn't just to get the code as SMALL as possible, it is to make it as readable as possible in the future

  protected $player1;
  protected $player2;
  protected $lookup = [
    0 => 'Love',
    1 => 'Fifteen',
    2 => 'Thirty',
    3 => 'Forty'
  ];

  public function __construct(Player $player1, Player $player2)
  {
    $this->player2 = $player2;
    $this->player1 = $player1;
  }
  public function score()
  {
    if($this->hasAWinner())
    {
      return 'Win for ' . $this->winner()->name;
    }
    if($this->hasTheAdvantage())
    {
      return 'Advantage ' . $this->winner()->name;
    }
    if($this->hasDeuce())
    {
      return 'Deuce';
    }
    $score = $this->lookup[$this->player1->points] . '-';
    return $score .=  $this->tied() ? 'All' : $this->lookup[$this->player2->points];
  }

  private function tied()
  {
    return $this->player1->points == $this->player2->points;
  }

  private function winner()
  {
    return $this->player1->points > $this->player2->points ? $this->player1 : $this->player2;
  }
  private function hasAWinner()
  {
    return $this->hasEnoughPointsToBeWon() && $this->isLeadingByAtLeastTwo();
  }
  private function hasEnoughPointsToBeWon()
  {
    return max([$this->player1->points, $this->player2->points]) >= 4;
  } 
  public function isLeadingByAtLeastTwo()
  {
    return abs($this->player1->points - $this->player2->points) >= 2;
  }
  public function hasTheAdvantage()
  {
    return $this->hasEnoughPointsToBeWon() && abs($this->player1->points - $this->player2->points) == 1;
  }
  private function hasDeuce()
  {
    return $this->player1->points + $this->player2->points >= 6 && $this->tied();
  }
}

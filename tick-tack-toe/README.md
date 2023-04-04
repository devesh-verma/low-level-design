```
Initializing new game
Starting game
Current player =>  Players { name: 'Devesh', symbol: 0 }
┌─────────┬──────┬──────┬──────┐
│ (index) │  0   │  1   │  2   │
├─────────┼──────┼──────┼──────┤
│    0    │ null │ null │ null │
│    1    │  0   │ null │ null │
│    2    │ null │ null │ null │
└─────────┴──────┴──────┴──────┘
Current player =>  Players { name: 'Harsh', symbol: 1 }
┌─────────┬──────┬──────┬──────┐
│ (index) │  0   │  1   │  2   │
├─────────┼──────┼──────┼──────┤
│    0    │ null │ null │ null │
│    1    │  0   │ null │ null │
│    2    │ null │ null │  1   │
└─────────┴──────┴──────┴──────┘
Current player =>  Players { name: 'Devesh', symbol: 0 }
┌─────────┬──────┬──────┬──────┐
│ (index) │  0   │  1   │  2   │
├─────────┼──────┼──────┼──────┤
│    0    │ null │ null │ null │
│    1    │  0   │  0   │ null │
│    2    │ null │ null │  1   │
└─────────┴──────┴──────┴──────┘
Current player =>  Players { name: 'Harsh', symbol: 1 }
Cell not empty { row: 1, column: 0, value: 0 }
Move not successful, added player to the start of the queue
Current player =>  Players { name: 'Harsh', symbol: 1 }
┌─────────┬──────┬──────┬──────┐
│ (index) │  0   │  1   │  2   │
├─────────┼──────┼──────┼──────┤
│    0    │ null │ null │ null │
│    1    │  0   │  0   │ null │
│    2    │  1   │ null │  1   │
└─────────┴──────┴──────┴──────┘
Current player =>  Players { name: 'Devesh', symbol: 0 }
┌─────────┬───┬──────┬──────┐
│ (index) │ 0 │  1   │  2   │
├─────────┼───┼──────┼──────┤
│    0    │ 0 │ null │ null │
│    1    │ 0 │  0   │ null │
│    2    │ 1 │ null │  1   │
└─────────┴───┴──────┴──────┘
Current player =>  Players { name: 'Harsh', symbol: 1 }
Cell not empty { row: 0, column: 0, value: 0 }
Move not successful, added player to the start of the queue
Current player =>  Players { name: 'Harsh', symbol: 1 }
┌─────────┬───┬──────┬──────┐
│ (index) │ 0 │  1   │  2   │
├─────────┼───┼──────┼──────┤
│    0    │ 0 │  1   │ null │
│    1    │ 0 │  0   │ null │
│    2    │ 1 │ null │  1   │
└─────────┴───┴──────┴──────┘
Checking winner
Current player =>  Players { name: 'Devesh', symbol: 0 }
Cell not empty { row: 1, column: 0, value: 0 }
Move not successful, added player to the start of the queue
Current player =>  Players { name: 'Devesh', symbol: 0 }
┌─────────┬───┬──────┬──────┐
│ (index) │ 0 │  1   │  2   │
├─────────┼───┼──────┼──────┤
│    0    │ 0 │  1   │  0   │
│    1    │ 0 │  0   │ null │
│    2    │ 1 │ null │  1   │
└─────────┴───┴──────┴──────┘
Checking winner
Current player =>  Players { name: 'Harsh', symbol: 1 }
Cell not empty { row: 0, column: 2, value: 0 }
Move not successful, added player to the start of the queue
Current player =>  Players { name: 'Harsh', symbol: 1 }
┌─────────┬───┬──────┬───┐
│ (index) │ 0 │  1   │ 2 │
├─────────┼───┼──────┼───┤
│    0    │ 0 │  1   │ 0 │
│    1    │ 0 │  0   │ 1 │
│    2    │ 1 │ null │ 1 │
└─────────┴───┴──────┴───┘
Checking winner
Current player =>  Players { name: 'Devesh', symbol: 0 }
Cell not empty { row: 1, column: 2, value: 1 }
Move not successful, added player to the start of the queue
Current player =>  Players { name: 'Devesh', symbol: 0 }
┌─────────┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │
├─────────┼───┼───┼───┤
│    0    │ 0 │ 1 │ 0 │
│    1    │ 0 │ 0 │ 1 │
│    2    │ 1 │ 0 │ 1 │
└─────────┴───┴───┴───┘
Checking winner
Game Winner:  TIE
```

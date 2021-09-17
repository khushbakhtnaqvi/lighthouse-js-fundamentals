const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 4,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 10,
    plumpness: 3
  }
]

const metric = 'redness'

function judgeVegetable(vegetables, metric)
{
  let judge = null;
  judge = vegetables[0];

  // for (let i = 1; i < vegetables.length; i++) {
  //   if (vegetables[i][metric] > judge[metric]) {
  //     judge = vegetables[i];
  //   }
  // }

  vegetables.forEach(function(vegetable){
    if (vegetable[metric] > judge[metric]) {
      judge = vegetable;
    }
  });

  return judge.submitter;
}



console.log(judgeVegetable(vegetables, metric));
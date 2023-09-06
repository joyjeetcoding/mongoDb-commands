 db.inventory.updateOne(
    { item: "paper" },
    {
      $set: { "size.uom": "m", status: "E" },
      $currentDate: { lastModified: true }
    }
 )
 
 db.inventory.find(
    { item: "paper" },
 )
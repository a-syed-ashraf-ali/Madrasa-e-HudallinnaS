function resetAppData() {
  const confirmReset = confirm("Are you sure you want to delete all data? This action cannot be undone.");
  
  if (confirmReset) {
    // Clear browser local & session storage
    localStorage.clear();
    sessionStorage.clear();

    // Clear IndexedDB databases if you are using IndexedDB
    if (window.indexedDB && indexedDB.databases) {
      indexedDB.databases().then((dbs) => {
        dbs.forEach((db) => indexedDB.deleteDatabase(db.name));
      });
    }

    alert("All data has been deleted successfully. Reloading application...");
    
    // Reload the application
    window.location.reload();
  }
}

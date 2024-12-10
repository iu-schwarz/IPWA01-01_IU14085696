<template>
  <div>
    <input v-model="filterText" placeholder="Suche nach Land oder Unternehmen..."/>
    <table class="emissions-table">
      <thead>
      <tr>
        <th @click="sortByColumn('country')">Land
          <span v-if="sortColumn === 'country'">
              {{ sortAsc ? '^' : 'v' }}
            </span>
        </th>
        <th @click="sortByColumn('company')">Unternehmen
          <span v-if="sortColumn === 'company'">
              {{ sortAsc ? '^' : 'v' }}
            </span>
        </th>
        <th @click="sortByColumn('emission')">CO2 Emissionen in Tonnen
          <span v-if="sortColumn === 'emission'">
              {{ sortAsc ? '^' : 'v' }}
            </span>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="dataRecord in filteredAndSortedDataList" :key="dataRecord.id">
        <td>{{ dataRecord.country }}</td>
        <td>{{ dataRecord.company }}</td>
        <td class="emission_column">{{ dataRecord.emission }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableEmissions",
  data() {
    return {
      filterText: '',
      sortAsc: true,
      sortColumn: 'country',
      emissionsData: [
        { id: 1, country: 'Österreich', company: 'LoadMarker GmbH', emission: 1000 },
        { id: 2, country: 'Deutschland', company: 'Testfirma GmbH', emission: 30450 },
        { id: 3, country: 'Schweiz', company: 'Goldfabrik 123 GmbH', emission: 1394 }
      ]
    };
  },
  computed: {
    filteredAndSortedDataList() {
      let dataList = this.emissionsData.filter(dataRecord =>
          dataRecord.country.toUpperCase().includes(this.filterText.toUpperCase()) ||
          dataRecord.company.toUpperCase().includes(this.filterText.toUpperCase())
      );

      dataList = dataList.sort((a, b) => {
         if(a[this.sortColumn] > b[this.sortColumn]){
           return this.sortAsc ? -1 : 1;
         }
          if(a[this.sortColumn] < b[this.sortColumn]){
            return this.sortAsc ? 1 : -1;
          }
          return 0;
      });
      return dataList;
    }
  },
  methods: {
    sortByColumn(sortColumn) {
      if (this.sortColumn === sortColumn) {
        this.sortAsc = !this.sortAsc;
      } else {
        this.sortColumn = sortColumn;
        this.sortAsc = true;
      }
    }
  }
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

input {
  width: 90%;
  max-width: 1000px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid lightgrey;
  font-size: 16px;
}

.emissions-table {
  width: 90%;
  max-width: 2000px;
  border-collapse: collapse;
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  font-size: 14px;
}

th {
  background-color: lightgrey;
  color: black;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

th:hover {
  background-color: gray;
}

tbody tr {
  border-bottom: 1px solid #ddd;
}

tbody tr:nth-child(even) {
  background-color: ghostwhite;
}

tbody tr:hover {
  background-color: whitesmoke;
}

tbody tr td {
  color: black;
}

.emission_column {
  color: red;
}
</style>

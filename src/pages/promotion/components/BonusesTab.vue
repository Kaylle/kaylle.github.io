<template>
  <div class='q-px-lg q-pb-lg row q-col-gutter-lg'>
    <div class='col-4'>
      <SpendingPointsMechanic class="q-mb-lg"/>
      <ChallengeMechanic/>
    </div>
    <div class='col-4'>
      <AbsenceForALongTimeMechanic class="q-mb-lg"/>
      <PointsForPollMechanic/>
    </div>
    <div class='col-4'>
      <WelcomeBonusMechanic class="q-mb-lg"/>
      <PointsForFriendsMechanic/>
    </div>
  </div>
</template>

<script setup lang="ts">
import SpendingPointsMechanic from 'components/SpendingPointsMechanic.vue';
import WelcomeBonusMechanic from 'components/WelcomeBonusMechanic.vue';
import PointsForPollMechanic from 'components/PointsForPollMechanic.vue';
import ChallengeMechanic from 'components/ChallengeMechanic.vue';
import AbsenceForALongTimeMechanic from 'components/AbsenceForALongTimeMechanic.vue';
import PointsForFriendsMechanic from 'components/PointsForFriendsMechanic.vue';
</script>

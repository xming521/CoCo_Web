<template>
    <div id="app">
        <flow-panel></flow-panel>
    </div>
</template>

<script>
    import FlowPanel from './components/panel'
    import './components/index.css'

    export default {
        name: 'index',
        components: {
            FlowPanel
        }
    }
</script>

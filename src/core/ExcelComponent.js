import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unsubscribers = []

    this.prepare()
  }

  // setup our component before init
  prepare() {}

  // return component layout
  toHTML() {
    return ''
  }

  // tell to listeners about event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // emit to event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  // init component
  // add DOM listeners
  init() {
    this.initDOMListeners()
  }

  // destroy component
  // remove DOM listeners
  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach(unsub => unsub())
  }
}

import { ChronosEngine } from './core/ChronosEngine.js';

async function main() {
  const engine = new ChronosEngine('UNINITIALIZED');

  // add some simple transitions
  engine.addTransition({
    from: 'UNINITIALIZED',
    to: 'PRESENTATION',
    name: 'init',
    onEnter: async () => { engine.emit('lifecycle.init', { msg: 'presenting' }); },
  });

  engine.addTransition({
    from: 'PRESENTATION',
    to: 'AFFIRMATION',
    name: 'acknowledge',
  });

  engine.on('lifecycle.init', (e) => {
    console.log('[EVENT] lifecycle.init ->', e.meta.name, e.payload);
  });

  engine.on('system.phase', (e) => {
    console.log('[PHASE] changed ->', e.payload);
  });

  console.log('current phase:', engine.getPhase());
  await engine.goto('init');
  console.log('current phase after init:', engine.getPhase());

  // Permissions
  engine.permissions.declarePermission('bond:create', 'Create Bond', 'Allow creating a chronos bond');
  engine.permissions.grant('bond:create', 'user:anon', { tokens: 5, expiresInSeconds: 3600 });

  console.log('user tokens:', engine.permissions.getTokens('user:anon'));

  // Generate arrow label for viz
  const label = engine.synthesizeArrowLabel('artifact.created', { type: 'bond', id: 'abc' });
  console.log('synthesized arrow label ->', label);

  // simple event publish
  engine.emit('artifact.created', { id: 'abc', type: 'bond' }, 'chronos.internal');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

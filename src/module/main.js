var Matter = module.exports = require('../core/Matter');

Matter.Body = require('../body/Body');
Matter.Composite = require('../body/Composite');
Matter.World = require('../body/World');

Matter.Contact = require('../collision/Contact');
Matter.Detector = require('../collision/Detector');
Matter.Grid = require('../collision/Grid');
Matter.Pairs = require('../collision/Pairs');
Matter.Pair = require('../collision/Pair');
Matter.Query = require('../collision/Query');
Matter.Resolver = require('../collision/Resolver');
Matter.SAT = require('../collision/SAT');

Matter.Constraint = require('../constraint/Constraint');

Matter.Common = require('../core/Common');
Matter.Engine = require('../core/Engine');
Matter.Events = require('../core/Events');
Matter.Sleeping = require('../core/Sleeping');

// @if DEBUG
Matter.Metrics = require('../core/Metrics');
// @endif

Matter.Bodies = require('../factory/Bodies');

Matter.Axes = require('../geometry/Axes');
Matter.Bounds = require('../geometry/Bounds');
Matter.Vector = require('../geometry/Vector');
Matter.Vertices = require('../geometry/Vertices');

// aliases

Matter.World.add = Matter.Composite.add;
Matter.World.remove = Matter.Composite.remove;
Matter.World.addComposite = Matter.Composite.addComposite;
Matter.World.addBody = Matter.Composite.addBody;
Matter.World.addConstraint = Matter.Composite.addConstraint;
Matter.World.clear = Matter.Composite.clear;
Matter.Engine.run = () => {};
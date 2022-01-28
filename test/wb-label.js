require('should')
const { shellExec, shouldNotBeCalled } = require('./lib/utils')

describe('wb label', () => {
  it('should display help', async () => {
    const { stdout } = await shellExec('./bin/wd label')
    stdout.should.containEql('Usage:')
  })

  it("should find an entity's label", async () => {
    const { stdout } = await shellExec('./bin/wd label Q123456')
    stdout.should.equal('Friedrichshafen')
  })

  it('should not fallback on another language if a language is explicitly specificed', async () => {
    await shellExec('./bin/wd label --lang uk Q15726039')
    .then(shouldNotBeCalled)
    .catch(({ stderr }) => {
      stderr.trim().should.equal('no result found')
    })
  })

  it('should be tolerant on input', async () => {
    const { stdout } = await shellExec('./bin/wd label azfzafzafazQ123456fazafazfz')
    stdout.should.equal('Friedrichshafen')
  })
})
